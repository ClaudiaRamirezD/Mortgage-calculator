import ResultsEmpty from "./ResultsEmpty"
import ResultsFilled from "./ResultsFilled"


const Results = ({ results }) => {
    const { monthlyRepayment, totalRepayment } = results;

    const isEmpty = monthlyRepayment === 0;
    
    return (
        <div
        className={`results py-7 px-6 bg-[var(--slate-900)] flex flex-col gap-4 items-center ${
            isEmpty ? "justify-center" : "justify-start"
        } flex-1 md:rounded-bl-[5rem]`}
        >
        {isEmpty ? (
            <ResultsEmpty />
        ) : (
            <ResultsFilled
            monthlyRepayment={monthlyRepayment}
            totalRepayment={totalRepayment}
            />
        )}
        </div>
    );
};


export default Results;