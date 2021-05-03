import React from 'react';

const Totalsalary = (props) => {
    const list = props.list;

    const totalSalary = list.reduce((total, player) => total + player.salary, 0)

    return (
        <div className="salarySection">
            <h4>total salary : {totalSalary}</h4>
        </div>
    );
};

export default Totalsalary;