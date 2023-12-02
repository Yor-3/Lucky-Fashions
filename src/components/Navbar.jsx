import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs';



const Navbar = ({setData,cart}) => {
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price0,price1) =>{
    const element = items.filter((product)=>(product.price >=price0 && product.price<=price1))
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }


  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">Lucky Fashions</Link>

            <form
            // onClick={handleSubmit} 
            onSubmit={handleSubmit}
             className="search-bar">
                <input 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text"
                 placeholder='Search Products'
                  />
            </form>


            <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
  <BsFillCartCheckFill style={{fontSize:'1.5rem'}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div>

        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div 
            onClick={()=>setData(items)}
            className="items">No Filter</div>
            <div 
            onClick={()=>filterByCategory('Fusion')}
             className="items">Fusion</div>
            <div
            onClick={()=>filterByCategory('Ethenic')}
    
             className="items">Ethnic</div>
            <div
            onClick={()=>filterByCategory('Western')}
    
             className="items">Western</div>
            <div
            onClick={()=>filterByPrice(0,1000)}
            className="items">0{"-"}1000</div>
            <div
            onClick={()=>filterByPrice(1000,3000)}
            className="items">1000{"-"}3000</div>
            <div
            onClick={()=>filterByPrice(3000,5000)}
            className="items">3000{"-"}5000</div>
            <div
            onClick={()=>filterByPrice(5000,10000)}
            className="items">5000{"-"}10000</div>
            
            </div>
          )
        }

      
    </header>
    </>
  )
}

export default Navbar
