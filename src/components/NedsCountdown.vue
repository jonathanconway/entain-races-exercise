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
  <span class="countdown-container">
    <span v-if="countdownGettingClose" class="getting-close" aria-label="Getting close">
      &nbsp;
    </span>
    <time
      class="countdown-minutes-seconds"
      :class="`minutes-seconds ${countdownGettingClose ? 'minutes-seconds--getting-close' : ''}`"
      :datetime="startDateTime"
      aria-label="Countdown to start"
      aria-live="off"
    >
      {{ countdown }}
    </time>
  </span>
</template>

<style lang="css" scoped>
.countdown-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.getting-close {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--color-brand);
  animation: pulse 1s infinite;
}

.minutes-seconds {
  font-size: 0.875rem;
  font-weight: bold;
}

.minutes-seconds--getting-close {
  color: var(--color-brand-dark);
}
</style>
