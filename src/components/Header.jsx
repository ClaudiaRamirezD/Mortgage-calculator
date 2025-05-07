const Header = ({setFormData, setResults}) => { 
    return (
        <div className="title flex gap-1 flex-col lg:flex-row items-start md:flex-row md:justify-between">    
            <h1 className="font-bold text-lg text-[var(--slate-900)]">Mortgage Calculator</h1>
            <button
                className="text-[var(--slate-700)] font-medium cursor-pointer border-b border-[var(--slate-500)]"
                type="button"
                onClick={() => {
                    setFormData({ amount: '', term: '', rate: '', types: '' });
                    setResults({ monthlyRepayment: 0, totalRepayment: 0 });
                }}
            >
            Clear All
            </button>
        </div>
    )
}

export default Header;