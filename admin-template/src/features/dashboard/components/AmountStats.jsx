

function AmountStats(){
    return(
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">revenue</div>
                <div className="stat-value">$25,600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Players</button> 
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Bank transfer</div>
                <div className="stat-value">$5,600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Members</button> 
                </div>
            </div>
        </div>
    )
}

export default AmountStats