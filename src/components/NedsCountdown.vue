<script setup lang="ts">
/**
 * @displayName NedsCountdown
 *
 * Countdown timer for a race.
 * Displays the duration until race start, formatted as `{minutes}m {seconds}s`. For example: "5m 30s".
 * If the countdown is getting close, also displays a visual indicator (a pulsing dot) to alert the user.
 */

defineProps<{
  /**
   * Represents the start date and time of the race in UTC format
   * @example "2026-02-03T14:45:29.000Z"
   */
  startDateTime: string;

  /**
   * Represents the current countdown time in a human-readable format
   * @example "5 minutes"
   */
  countdown: string;

  /**
   * Indicates whether the countdown is getting close
   */
  countdownGettingClose: boolean;
}>();
</script>

<template>
  <span class="flex flex-row items-center gap-3">
    <span
      v-if="countdownGettingClose"
      class="inline-flex size-2 rounded-full bg-brand animate-ping"
      aria-label="Getting close"
    >
      &nbsp;
    </span>
    <time
      :class="`text-sm font-bold ${countdownGettingClose ? 'text-brand-dark' : ''}`"
      :datetime="startDateTime"
      aria-label="Countdown to start"
      aria-live="off"
    >
      {{ countdown }}
    </time>
  </span>
</template>
