# Bug Fixes TODO

## Plan Steps:
- [x] 1. Rename frontend/src/pages/Project.jsx → Projects.jsx
- [x] 2. Update import in frontend/src/app.jsx (no change needed after rename)
- [x] 3. Fix import in frontend/src/pages/Chat.jsx (ChatBox → Chatbot)
- [x] 4. Update API URL in frontend/src/services/api.js to localhost:5000 (syntax fixed)
- [x] 5. Remove console.log from backend/src/app.js
- [x] 6. Verify components (ProjectCard.jsx, Chatbot.jsx) - clean
- [x] 7. Test: 
  cd frontend && npm install && npm run dev
  (new tab) cd backend && npm install && node src/app.js 
  (new tab) cd ai-service && python -m venv venv && venv\Scripts\activate && pip install flask && python main.py
- [x] 8. COMPLETE: All import/syntax/placeholder/console bugs fixed.
