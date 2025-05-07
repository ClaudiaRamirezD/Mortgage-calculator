import { useState } from 'react'
import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import Results from './components/Results.jsx'

import './App.css'

function App() {
  const [formData, setFormData] = useState({
    amount: '',
    term: '',
    rate: '',
    types: '',
  })

  const [results, setResults] = useState({
    monthlyRepayment: 0,
    totalRepayment: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'amount') {
      const rawValue = value.replace(/,/g, '');
      if (!/^\d*$/.test(rawValue)) return;

      const formattedValue = rawValue === '' ? '' : parseInt(rawValue).toLocaleString('en-US');

      setFormData((prev) => {
        const updated = { ...prev, [name]: formattedValue };
        
        return updated;
      });
    } else {
      setFormData((prev) => {
        const updated = { ...prev, [name]: value };
        return updated;
      });
      }
  };

  const [errors, setErrors] = useState({
  amount: false,
  term: false,
  rate: false,
  type: false,
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    const { amount, term, rate, types } = formData; // Corrected: Changed 'type' to 'types'

    const newErrors = {
      amount: !formData.amount.trim() || isNaN(parseFloat(formData.amount.replace(/,/g, ''))),
      term: !formData.term.trim() || isNaN(parseFloat(formData.term)),
      rate: !formData.rate.trim() || isNaN(parseFloat(formData.rate)),
      type: !formData.types.trim(), // Validate that a type is selected
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      console.log("Error: Missing required fields", newErrors);
      return;
    }

    // Remove commas from amount for calculation
    const rawAmount = parseFloat(amount.replace(/,/g, ''));
    const rawRate = parseFloat(rate);
    const rawTerm = parseFloat(term);

    console.log('Raw parsed values:', { rawAmount, rawTerm, rawRate });

    if (isNaN(rawAmount) || isNaN(rawRate) || isNaN(rawTerm)) {
      console.log("Error: Invalid values", { rawAmount, rawRate, rawTerm });
      return;
    }

    // Calculate results based on the selected type
    if (types === "Repayment") {
      const monthlyRate = rawRate / 100 / 12;
      const numberOfPayments = rawTerm * 12;

      const monthlyRepayment = (rawAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
      const totalRepayment = monthlyRepayment * numberOfPayments;

      setResults({
        monthlyRepayment: monthlyRepayment,
        totalRepayment: totalRepayment,
      });
    } else if (types === "Interest Only") {
      const monthlyRepayment = (rawAmount * (rawRate / 100)) / 12;
      const totalRepayment = monthlyRepayment * rawTerm * 12;

      setResults({
        monthlyRepayment: monthlyRepayment,
        totalRepayment: totalRepayment,
      });
    }
  };
  

  return (
    <main className='bg-[var(--slate-100)] md:min-h-screen flex flex-col items-center justify-center'>
      <div className="container text-base font-plus text-[var(--slate-700)] flex flex-col md:flex-row md:max-w-3/4   md:h-full md:rounded-2xl md:border-transparent md:overflow-hidden">
        <div className="form bg-white py-7 px-6 md:p-9 flex flex-col flex-1 basis-0 md:w-1/2">
          <Header setFormData={setFormData} setResults={setResults} />
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </div>

        <div className='bg-white flex-1 basis-0 flex flex-col md:w-1/2'>
          <div className="results py-7 px-6 bg-[var(--slate-900)] flex flex-col items-center justify-center flex-1 md:rounded-bl-[5rem]">
            <Results results={results} />
          </div>
        </div>
      </div>
    </main>

  );
}

export default App
