import React from 'react'
import { BrowserRouter, Link, Route,Routes} from 'react-router-dom';
import { routes } from './routes';
import './style.css';

const Router = (props) => {
    return (
    
        <BrowserRouter>
        <div>
            <nav id="navbar">
                <ul style={{
                    listStyleType: 'none',
                    display: 'inline-flex'                
                }}>
                    {
                        routes && routes.length && routes.filter(e=>e.title!=='notfound').map((p,i)=>{
                            return  <li key={i} style={{
                                marginLeft:'1vw'
                            }}>
                                        <Link to={p.path}>{p.title}</Link>
                                    </li>
                        })
                    }
                    
                </ul>
            </nav>
            <Routes>
                {
                    routes && routes.length && routes.map((p,i)=>{
                        return <Route key={i} path={p.path} index={p.index} element={<p.element />} />
                    })
                }
            </Routes>
        </div>
    </BrowserRouter>

    )
}

export default Router;