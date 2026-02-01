import type { NextRace } from "@/types/next-race";

/**
 * Sorts next races by countdown ascending (earlier => later)
 * @param nextRaces Next races in any sort order
 * @returns Next races in defined sort order
 */
export function sortNextRaces(nextRaces: readonly NextRace[]) {
  return [...nextRaces].sort((a, b) => a.countdown - b.countdown);
}
