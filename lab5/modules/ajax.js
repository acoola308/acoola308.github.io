/* class Ajax {

    post(url, callback) {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.send()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.response)
                callback(data)
            }
        }
    } 

    post(url, callback) {
        axios.post(url)
            .then(response => {
                callback(response.data);
            })
            .catch(error => {
                console.error('Ошибка:', error);
                callback(null);
            });
    } 
   
    async post(url, callback) {
        try {
            let response = await fetch(url, {
                method: 'POST',
            });

            if (response.ok) {
                let responseData = await response.json();
                callback(responseData);
            } else {
                console.error('Error: ', response.statusText);
            }
            
        } catch (e) {
            console.log(e)
        }
    }
}

export const ajax = new Ajax();
 */

class Ajax {
    async post(url, callback, retries = 2, delay = 1000) {
        let attempt = 0; 

        while (attempt < retries) {
            try {
                const response = await fetch(url, { method: 'POST' });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();
                callback(data);
                return;

            } catch (error) {
                console.error(`Попытка ${attempt + 1} не удалась. Ошибка:, error`);

                attempt++;

                if (attempt < retries) {

                    await new Promise(resolve => setTimeout(resolve, delay));
                } else {
                    console.error("Все попытки не удались");
                }
            }
        }
    }
}

export const ajax = new Ajax();