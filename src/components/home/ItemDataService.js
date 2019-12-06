class ItemDataService {

    retrieveAllItems() {
        return fetch(`http://localhost:8080/groups/any/items`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json();
        });
    }

    deleteItem(id) {
        //console.log('executed service')
        return fetch(`http://localhost:8080/groups/any/items/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(() => {
            return 'OK';
        });
    }

    addItem(item) {
        return fetch(`http://localhost:8080/groups/${item.cgroup}/items`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(item),
        }).then(() => {
            return 'OK';
        });
    }

    retrieveGroups() {
        return fetch(`http://localhost:8080/groups/`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json();
        });
    }

}

export default new ItemDataService()
