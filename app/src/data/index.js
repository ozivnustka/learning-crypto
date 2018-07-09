export const getLastBlock = async () => {
    const response = await fetch('/blocks/last');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  export const getBlocks = async () => {
    const response = await fetch('/blocks?order=desc');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };  

  export const addBlock = async data => {
    const response = await fetch('/blocks', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data) 
    })
    const body = await response.json();
    if (response.status !== 201) throw Error(body.message);
    return body;
  }

  export const getTransactions = async () => {
    const response = await fetch('/transactions');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };  

  export const getBalance = async () => {
    const response = await fetch('/balance');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };  
  