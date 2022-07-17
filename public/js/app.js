
class ProductList extends React.Component {
    render = () =>
        <div className="ui stackable items">
            <Product/>
        </div>
}

class Product extends React.Component {
    
    render = () =>
    <div className="item">
        <div className="image">
            <img src="images/products/image-aqua.png" alt="Aqua Image"/>
        </div>
        <div className="middle aligned content">
            <div className="description">
                <a>Fort Knight</a>
                <p>Authentic renaissance actors, delivered in just two weeks!</p>
            </div>
            <div className="extra">
                <span>Submitted by: </span>
                <img src="images/avatars/daniel.jpg" className="ui avatar image"/>
            </div>
        </div>
    </div>
}

ReactDOM.render(
    <ProductList/>, document.getElementById('content')
)