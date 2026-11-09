function askAI() {
  let q = document.getElementById("aiInput").value.toLowerCase();
  let answer = document.getElementById("aiAnswer");

  if (q.includes("panado") || q.includes("paracetamol")) {
    answer.innerHTML = "💊 <b>Paracetamol (Panado):</b> Used for pain relief and fever. Adults: 500mg - 1000mg every 4-6 hours, max 4000mg per day. Do not mix with alcohol. Check with pharmacist if you have liver problems.";
  } else if (q.includes("amoxicillin") || q.includes("antibiotic")) {
    answer.innerHTML = "💊 <b>Amoxicillin:</b> Antibiotic for bacterial infections. Take full course as prescribed, even if you feel better. Common side effects: nausea, diarrhoea. Tell pharmacist if allergic to penicillin.";
  } else if (q.includes("stock") || q.includes("expiry") || q.includes("out of stock")) {
    answer.innerHTML = "📦 <b>Stock AI:</b> In my Pharmacy System, AI checks stock levels and expiry dates automatically and alerts when medicine is low or expiring in 30 days.";
  } else if (q.includes("interaction") || q.includes("mix") || q.includes("together")) {
    answer.innerHTML = "⚠️ <b>Interaction Checker:</b> Always check! Example: Do NOT take Warfarin + Aspirin together without doctor advice - high bleeding risk. My AI flags these clashes.";
  } else if (q === "") {
    answer.innerHTML = "Please type a medicine name first, e.g. Panado";
  } else {
    answer.innerHTML = "🤖 I am still learning! I know Panado, Amoxicillin, Stock and Interactions. In the full version, I will connect to a real medicine database. What else do you want me to learn?";
  }
}
console.log("Letshela Portfolio + AI Loaded!");