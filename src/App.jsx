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
        console.log('Updated form data:', updated);
        return updated;
      });
    } else {
      setFormData((prev) => {
        const updated = { ...prev, [name]: value };
        console.log('Updated form data:', updated);
        return updated;
      });
      }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Submitted data:', formData);

    const { amount, term, rate } = formData;
    // Remove commas from amount for calculation
    const rawAmount = parseFloat(amount.replace(/,/g, ''));
    const rawRate = parseFloat(rate);
    const rawTerm = parseFloat(term);
    console.log('Raw parsed values:', { rawAmount, rawTerm, rawRate });

    if (rawAmount && rawTerm && rawRate) {
      const monthlyRate = rawRate / 100 / 12;
      const numberOfPayments = rawTerm * 12;

      const monthlyRepayment = (rawAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
      const totalRepayment = monthlyRepayment * numberOfPayments;

      if (isNaN(rawAmount) || isNaN(rawRate) || isNaN(rawTerm)) {
      console.log("Error: Invalid values", { rawAmount, rawRate, rawTerm });
      return;
      }

      // setResults({
      // monthlyRepayment: monthlyRepayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      // totalRepayment: totalRepayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      // });

      setResults({
      monthlyRepayment: monthlyRepayment,
      totalRepayment: totalRepayment,
  });



      console.log('Monthly Repayment:', monthlyRepayment);
      console.log('Total Repayment:', totalRepayment);


    }
  };
  
  const isFormFilled = formData.amount && formData.term && formData.rate;

  return (
    <main>
      <div className="container text-base font-plus text-[var(--slate-700)] flex flex-col">
        <div className="form bg-white py-7 px-6 flex flex-col">
          <Header />
          console.log('App loaded'); 
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <div className="results py-7 px-6 bg-[var(--slate-900)] flex flex-col gap-4">
          <Results results={results} />
        </div>
      </div>
    </main>
  );
}

export default App
