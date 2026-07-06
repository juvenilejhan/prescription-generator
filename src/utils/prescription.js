export const emptyMedicine = () => ({
  id: crypto.randomUUID(),
  name: "",
  dose: "",
  frequency: "",
  duration: "",
  note: "",
});

export const todayISO = () => new Date().toISOString().slice(0, 10);

export const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
