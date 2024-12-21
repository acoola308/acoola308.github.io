export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.photo_400_orig}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body" id="infopole">
                                <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                                <p>Id - ${data.id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    online(data) {
        if (data === 0) {
            return `<p>Не в сети</p>`
        }

        else {
            return `<p style="color: green;">В сети</p>`
        }
    }

    lastseen(data) {
        const date = new Date(data * 1000);
        return `<span style="color: gray;">Последний раз был(а) ${date.toLocaleString()}</span>`
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const html_2 = this.online(data.online)
        const new_data = document.getElementById("infopole")
        new_data.insertAdjacentHTML('beforeend', html_2)
        
        if (data.online === 0) {
            const html_3 = this.lastseen(data.last_seen.time)
            new_data.insertAdjacentHTML('beforeend', html_3)
        }
    }
}