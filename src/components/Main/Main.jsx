import { Component } from "react"

export default class Main extends Component {
    constructor(props) {
      super(props)
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
      }
    }
  
    componentDidMount() {
      fetch("http://test-backend.itdelta.agency/api/images")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result,
            })
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            })
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state
      if (error) {
        return <p>Error {error.message}</p>
      } else if (!isLoaded) {
        return <p>Loading...</p>
      } else {
        return (
          <div>
            <ul>
              {items.map((items) => (
                <li key={items.id}>
                  <img width="200px" src={items.image} />
                  <p>id: {items.id}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    }
  }