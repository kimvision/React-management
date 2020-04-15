import  React from 'react';


class Customer extends React.Component
{
    render()
    {
        return (
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        )
    }
}

export default Customer;



// class Customer extends React.Component
// {
//     render()
//     {
//         return (
//         <div>
//             <h2>홍길동</h2>
//             <p>12354</p>
//             <p>남자</p>
//             <p>대학생</p>
//         </div>
//         )
//     }
// }
