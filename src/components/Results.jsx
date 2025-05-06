import ResultsEmpty from "./ResultsEmpty"
import ResultsFilled from "./ResultsFilled"


const Results = ({ results }) => {
    const { monthlyRepayment, totalRepayment } = results;
    
    return (
    <div>
        {monthlyRepayment > 0 ? (
        <ResultsFilled
            monthlyRepayment={monthlyRepayment}
            totalRepayment={totalRepayment}
        />
        ) : (
        <ResultsEmpty />
        )}
    </div>
    );
};


export default Results;