from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "AI service running 🤖"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    user_message = data.get("message", "")
    # Mock AI response (extend with real LLM later)
    responses = [
        "That's interesting! Tell me more.",
        "Great question. In portfolio terms, I'd optimize with React hooks.",
        "Futuristic advice: Use Framer Motion for smooth transitions!",
        "AI suggests glassmorphism for that modern look."
    ]
    import random
    ai_response = random.choice(responses)
    return jsonify({"response": ai_response})

if __name__ == "__main__":
    app.run(port=8000, debug=True)
