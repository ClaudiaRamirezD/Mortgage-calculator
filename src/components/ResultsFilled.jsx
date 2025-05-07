const ResultsFilled = ({ monthlyRepayment, totalRepayment }) => {
    // Formateamos los valores para mostrarlos
    const formattedMonthlyRepayment = monthlyRepayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formattedTotalRepayment = totalRepayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <section className="results-filled flex flex-col gap-3 md:gap-5 md:self-start">
            <h2 className="text-white font-bold text-lg">Your results</h2>
            <p className="text-[var(--slate-300)] font-medium text-sm">
                Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
            </p>
            <div className="results-table flex flex-col gap-4 md:gap-6 bg-[var(--slate-dark)] rounded-md p-4 md:p-7 border-t-4 border-[var(--lime)]">
                <div>
                    <h3 className="text-sm font-semibold text-[var(--slate-300)]">Your monthly repayments</h3>
                    <p className="text-[var(--lime)] text-3xl font-semibold pt-2">${formattedMonthlyRepayment}</p>
                </div>
                <div className="border-t-1">
                    <h4 className="pt-4 text-sm font-semibold text-[var(--slate-300)]">Total you'll repay over the term</h4>
                    <p className="pt-2 text-[var(--slate-100)] font-semibold text-2xl">${formattedTotalRepayment}</p>
                </div>
            </div>
        </section>
    );
};

export default ResultsFilled;
