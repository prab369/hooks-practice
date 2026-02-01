import { useState } from "react";
import './App.css'

function App() {
  const [users, setUsers] = useState(1);
  const [plan, setPlan] = useState("basic");
  const [billing, setBilling] = useState("monthly");
  const [discount, setDiscount] = useState(0);

  const basePrice = plan === "basic" ? 10 : 20;
  let total = users * basePrice;
  if (billing === "yearly") total *= 0.8;
  total -= (total * discount) / 100;

  return (
    <div className="w-full h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 flex items-center justify-center px-4">
      
      <div className="w-full h-full max-w-4xl max-h-[90vh] bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col justify-center">
        
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Pricing Engine</h1>
          <p className="text-slate-600 mt-2">Smart SaaS cost calculator</p>
        </div>

        
        <div className="mb-8 rounded-2xl bg-slate-900 text-white py-6 text-center">
          <p className="text-xs uppercase tracking-wide text-slate-300">Estimated Cost</p>
          <p className="text-5xl font-extrabold text-emerald-400">${total.toFixed(2)}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          
          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1 block">Users</label>
            <input
              type="number"
              min="1"
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          
          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1 block">Discount (%)</label>
            <input
              type="number"
              min="0"
              max="50"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          
          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1 block">Plan Type</label>
            <div className="flex gap-3">
              <button
                onClick={() => setPlan("basic")}
                className={`flex-1 py-2 rounded-xl text-sm font-semibold transition ${
                  plan === "basic" ? "bg-indigo-600 text-white" : "bg-grey border border-slate-300"
                }`}
              >
                Basic
              </button>
              <button
                onClick={() => setPlan("pro")}
                className={`flex-1 py-2 rounded-xl text-sm font-semibold transition ${
                  plan === "pro" ? "bg-indigo-600 text-white" : "bg-grey border border-slate-300"
                }`}
              >
                Pro
              </button>
            </div>
          </div>

          
          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1 block">Billing Cycle</label>
            <div className="flex gap-3">
              <button
                onClick={() => setBilling("monthly")}
                className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${
                  billing === "monthly" ? "bg-slate-900 text-white" : "bg-grey border border-slate-300"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${
                  billing === "yearly" ? "bg-slate-900 text-white" : "bg-grey border border-slate-300"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
