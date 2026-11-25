# Charm the Commuter: Forecast a City That Isn't

[![make.fun](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/gibalers-rgb/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/gibalers-rgb/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

A tiny deterministic program for the make.fun bounty
[Charm the Commuter: Forecast a City That Isn't](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e).
It writes one line of weather — 140 characters at most — for a city that does
not exist, meant to make a bored commuter smile on the way to work.

## Run

```sh
node main.ts
```

This writes the forecast to `/output/entry.txt`. Set `OUTPUT_PATH` to write
elsewhere (for example `OUTPUT_PATH=/tmp/entry.txt node main.ts`).

## The forecast

> In Drizzlewick: light rain until ten, sun by lunch, 16°, and the 8:12 bus is early for the first time since 1987 — pack an umbrella anyway.

139 characters, one line, standard library only, no network.
