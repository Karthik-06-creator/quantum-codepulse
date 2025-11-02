export async function POST(req) {
    const { input } = await req.json();
    const states = ["|0⟩", "|1⟩", "|+⟩", "|−⟩", "|ψ⟩"];
    const probabilities = states.map(() => Math.random());
    const total = probabilities.reduce((a, b) => a + b, 0);
    const normalized = probabilities.map((p) => p / total);
  
    return Response.json({
      input,
      states,
      probabilities: normalized,
    });
  }
  