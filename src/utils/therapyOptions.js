export const EXERCISE_OPTIONS = [
  "SLR (Straight Leg Raise)",
  "Active Knee Extension (AKE)",
  "Quad Sets",
  "Hamstring Stretch",
  "Glute Bridge",
  "Clamshells",
  "Heel Raises / Calf Raises",
  "Ankle Pumps",
  "Wall Slides (Knee Flexion)",
  "Short Arc Quads",
  "Hip Abduction",
  "Prone Lying (Back Extension)",
  "Shoulder Pendulum (Codman's)",
  "Wall Push-ups",
];

export const SIDE_OPTIONS = ["Bilateral", "Left", "Right", "Unilateral"];

export const POSITION_OPTIONS = [
  "Supine",
  "Prone",
  "Side-lying",
  "Sitting",
  "Standing",
  "Long Sitting",
  "High Sitting",
];

export const TYPE_OPTIONS = [
  "Stretching",
  "Strengthening",
  "Range of Motion (ROM)",
  "Balance / Proprioception",
  "Postural Correction",
  "Mobility",
  "Relaxation",
];

export const SETS_REPS_OPTIONS = ["5", "8", "10", "12", "15", "20", "30"];

export const HOLD_TIME_OPTIONS = [
  "5 secs",
  "10 secs",
  "15 secs",
  "20 secs",
  "30 secs",
  "45 secs",
  "60 secs",
];

export const EX_FREQUENCY_OPTIONS = [
  "Once daily",
  "Twice daily (Morning & Evening)",
  "3 times a day",
  "Every 2 hours",
  "Hourly",
];

export const EX_DURATION_OPTIONS = [
  "3 days",
  "5 days",
  "1 week",
  "2 weeks",
  "3 weeks",
  "1 month",
  "Until next visit",
  "Ongoing",
];

export const EX_NOTE_OPTIONS = [
  "Pain should not exceed 3/10",
  "Breathe out on effort",
  "Do not hold breath",
  "Stop if sharp pain occurs",
  "Keep back flat against the floor",
  "Use resistance band",
  "Apply ice pack after exercise",
  "Do not bend knee past 90 degrees",
];

// Factory function to create a blank exercise object
export const emptyExercise = () => ({
  id: Math.random().toString(36).slice(2), // Unique ID for deleting later
  name: "",
  side: "",
  type: "",
  position: "",
  sets: "",
  reps: "",
  holdTime: "",
  frequency: "",
  duration: "",
  note: "",
});
