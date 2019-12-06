import React from 'react';
import ItemDataService from './ItemDataService';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            list: [],
            form: {
                id: 0,
                cgroup: '',
                name: '',
                description: ''
            }
        };

        this.getData = this.getData.bind(this);
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getData()

        ItemDataService.retrieveGroups()
            .then(
                response => {
                    this.setState({groups: response});
                }
            )
            .catch(err => console.log(err));
    }

    getData() {
        ItemDataService.retrieveAllItems()
            .then(
                response => {
                    this.setState({list: response});
                }
            ).catch(err => console.log(err));

        console.log(`gr ${this.state.groups}`)

    }

    handleChange (evt) {
        const v = this.state['form'];
        v[evt.target.name] = evt.target.value;
        debugger;
        this.setState({ 'form': v });
    }

    handleSubmit(event) {
        event.preventDefault();

        ItemDataService.addItem(this.state['form'])
            .then(res => {
                this.getData();
            }).catch(err => err);
    }

    deleteCourseClicked(id) {
        ItemDataService.deleteItem(id)
            .then(
                () => {
                    this.setState({ message: `Delete of course ${id} Successful` });
                    this.getData();
                }
            )
    }

    getGroupName(id) {
        const element = this.state.groups.find(g => id===g.id);
        if (element) {
            return element.name;
        } else {
            return 'unknown';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id">Enter your id</label>
                    <input id="id" name="id" type="number" onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="name">Enter name</label>
                    <input id="name" name="name" type="text" onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="cgroup">Enter item group</label>
                    <select id="cgroup" name="cgroup" type="text" onChange={this.handleChange}>
                        {this.state.groups.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)}
                    </select>
                    <br/>
                    <label htmlFor="description">Enter your description</label>
                    <input id="description" name="description" type="text" onChange={this.handleChange}/>
                    <br/>
                    <button>Send data!</button>
                </form>

                <h3>All Items</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Group</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map(
                                item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{this.getGroupName(item.cgroup)}</td>
                                        <td>{item.description}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(item.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Items;