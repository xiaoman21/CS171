#!/usr/bin/env python3
"""
Generate an interactive Plotly visualization of Pew Research Center data on
the percentage of U.S. adults who regularly get news on social platforms.
"""

import argparse
from pathlib import Path

import pandas as pd
import plotly.graph_objects as go

DEFAULT_PLATFORMS = ["YouTube", "Instagram", "TikTok", "X/Twitter"]
YEAR_START = 2020
YEAR_END = 2025


def is_yearlike(value) -> bool:
    """Return True when value looks like a year between 2000 and 2100."""
    try:
        intval = int(str(value).strip())
    except Exception:  # pragma: no cover - defensive
        return False
    return 2000 <= intval <= 2100


def load_and_clean(csv_path: Path, platforms: list[str]) -> pd.DataFrame:
    """Load CSV data, normalize column names, and filter to desired years/platforms."""
    df = pd.read_csv(csv_path)

    # Identify the year column
    year_col = None
    for col in df.columns:
        if str(col).strip().lower() in {"year", "years"}:
            year_col = col
            break
    if year_col is None:
        year_col = df.columns[0]

    df = df.rename(columns={year_col: "year"})
    df = df[df["year"].apply(is_yearlike)].copy()
    df["year"] = df["year"].astype(int)

    missing = [plat for plat in platforms if plat not in df.columns]
    if missing:
        raise SystemExit(
            f"Missing expected platform columns: {missing}\n"
            f"Available columns: {list(df.columns)}"
        )

    for plat in platforms:
        df[plat] = pd.to_numeric(df[plat], errors="coerce")

    df = df[(df["year"] >= YEAR_START) & (df["year"] <= YEAR_END)]
    df = df[["year"] + platforms].copy()
    if df.empty:
        raise SystemExit(
            f"No rows in the {YEAR_START}–{YEAR_END} window. Check your CSV."
        )

    return df


def build_figure(df: pd.DataFrame, platforms: list[str]) -> go.Figure:
    """Create a Plotly figure with platform trends and percentage-point changes."""
    start_year, end_year = YEAR_START, YEAR_END
    changes = []
    for plat in platforms:
        start_val = float(df.loc[df["year"] == start_year, plat].iloc[0])
        end_val = float(df.loc[df["year"] == end_year, plat].iloc[0])
        changes.append((plat, end_val - start_val))

    chg_df = (
        pd.DataFrame(changes, columns=["platform", "pp_change"])
        .sort_values("pp_change", ascending=False)
    )

    traces = []
    for plat in platforms:
        traces.append(
            go.Scatter(
                x=df["year"],
                y=df[plat],
                mode="lines+markers",
                name=plat,
                hovertemplate=f"{plat}<br>%{{x}}: %{{y}}%<extra></extra>",
            )
        )

    traces.append(
        go.Bar(
            x=chg_df["platform"],
            y=chg_df["pp_change"],
            name="Change 2020→2025",
            hovertemplate="%{x}: %{y:.1f} pp<extra></extra>",
            visible=False,
        )
    )

    source_note = dict(
        x=0,
        y=-0.2,
        xref="paper",
        yref="paper",
        showarrow=False,
        text="Source: Pew Research Center",
        xanchor="left",
        yanchor="top",
    )

    fig = go.Figure(data=traces)
    fig.update_layout(
        title="U.S. Adults Who Regularly Get News on Each Platform (2020–2025)",
        xaxis=dict(
            title="Year",
            tick0=YEAR_START,
            dtick=1,
            range=[YEAR_START - 0.5, YEAR_END + 0.5],
        ),
        yaxis=dict(title="% of U.S. adults"),
        legend=dict(
            orientation="h", yanchor="bottom", y=1.02, xanchor="center", x=0.5
        ),
        margin=dict(l=40, r=20, t=70, b=80),
        annotations=[source_note],
        updatemenus=[
            dict(
                type="buttons",
                direction="right",
                x=0.02,
                xanchor="left",
                y=0.98,
                yanchor="top",
                buttons=[
                    dict(
                        label="Trend lines (2020–2025)",
                        method="update",
                        args=[
                            {"visible": [True] * len(platforms) + [False]},
                            {
                                "title": "U.S. Adults Who Regularly Get News on Each Platform (2020–2025)",
                                "xaxis": {
                                    "title": "Year",
                                    "tick0": YEAR_START,
                                    "dtick": 1,
                                    "range": [YEAR_START - 0.5, YEAR_END + 0.5],
                                },
                                "yaxis": {"title": "% of U.S. adults"},
                                "annotations": [source_note],
                            },
                        ],
                    ),
                    dict(
                        label="Change (pp) 2020→2025",
                        method="update",
                        args=[
                            {"visible": [False] * len(platforms) + [True]},
                            {
                                "title": "Change in Regular News Use by Platform (percentage points), 2020→2025",
                                "xaxis": {"title": "Platform"},
                                "yaxis": {"title": "pp change"},
                                "annotations": [source_note],
                            },
                        ],
                    ),
                ],
            )
        ],
    )
    return fig


def main():
    parser = argparse.ArgumentParser(
        description="Interactive social-news visualization (Pew data)"
    )
    parser.add_argument("--csv", required=True, type=Path, help="Path to the Pew CSV")
    parser.add_argument(
        "--out",
        default=Path("social_news_interactive.html"),
        type=Path,
        help="Output HTML path",
    )
    parser.add_argument(
        "--platforms",
        nargs="*",
        default=DEFAULT_PLATFORMS,
        help=f"Platforms to include (default: {', '.join(DEFAULT_PLATFORMS)})",
    )
    args = parser.parse_args()

    df = load_and_clean(args.csv, args.platforms)
    fig = build_figure(df, args.platforms)

    args.out.parent.mkdir(parents=True, exist_ok=True)
    # Disable modebar (navigation bar)
    config = {"displayModeBar": False, "displaylogo": False}
    fig.write_html(args.out, include_plotlyjs="cdn", full_html=True, config=config)
    print(f"Wrote interactive HTML → {args.out.resolve()}")


if __name__ == "__main__":
    main()


