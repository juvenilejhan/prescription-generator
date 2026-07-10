export const MACHINE_OPTIONS = [
  "IFT (Interferential Therapy)",
  "TENS",
  "EMS (Electrical Muscle Stimulation)",
  "Russian Stimulation",
  "Ultrasound Therapy",
  "Shortwave Diathermy (SWD)",
  "Microwave Diathermy (MWD)",
  "Cervical Traction",
  "Lumbar Traction",
  "Hot Pack (Moist Heat)",
  "Cold Pack (Ice Therapy)",
  "Wax Bath (Paraffin)",
  "Laser Therapy (LLLT)",
  "Infrared (IR)",
];

export const AREA_OPTIONS = [
  "Lumbar spine",
  "Cervical spine",
  "Right shoulder",
  "Left shoulder",
  "Right knee",
  "Left knee",
  "Right ankle",
  "Left ankle",
  "Right elbow",
  "Left elbow",
  "Thoracic spine",
  "Whole back",
];

export const MODE_OPTIONS = ["Continuous", "Pulsed", "Burst", "Synchro", "N/A"];

export const INTENSITY_OPTIONS = [
  "Mild",
  "Moderate",
  "Strong",
  "Sensory level",
  "Motor level",
  "Patient tolerance",
];

export const MOD_DURATION_OPTIONS = [
  "5 mins",
  "10 mins",
  "15 mins",
  "20 mins",
  "25 mins",
  "30 mins",
];

export const MOD_FREQUENCY_OPTIONS = [
  "Daily",
  "Alternate days",
  "SOS (As needed)",
  "3 times a week",
];

export const emptyModality = () => ({
  id: Math.random().toString(36).slice(2),
  name: "",
  area: "",
  mode: "",
  intensity: "",
  duration: "",
  frequency: "",
});
