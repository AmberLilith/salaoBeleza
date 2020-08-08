const selectEmployer = (id) => {
    document.querySelector('#collapseEmployers').setAttribute('employerid',id);
    document.querySelector('#collapseEmployers').textContent = 'Profissional Selecionado: ' + document.querySelector("#"+id).textContent;
    document.querySelector('#collapseEmployers').click();
}

//employerDatas must be a array of objects and this objects will have 2 keys:
//employerId, employerName
const createEmployersList = (employersDatas) =>{
    for(let obj of employersDatas){
        let element = document.createElement("button");
        element.setAttribute("id","employer_"  + obj.employerId);
        element.setAttribute("employerid",obj.employerId);
        element.setAttribute("style","width:100%");                
        element.setAttribute("class","btn collapseOptions text-center");
        element.setAttribute("onclick","selectEmployer(this.id)");
        element.textContent = obj.employerName;
        document.querySelector("#employers").appendChild(element);
    }
}

//servicesDatas must be a objects array with keys serviceId,serviceName and serviceValue
const createServicesList = (servicesDatas) =>{
    for(let obj of servicesDatas){
        let element = document.createElement("button");
        element.setAttribute("id",obj.serviceId);
        element.setAttribute("class","btn collapseOptions");
        element.setAttribute("style","width:100%");
        element.setAttribute("title","Clique para adicionar este serviço.");
        element.setAttribute("value",obj.serviceValue);
        element.setAttribute("serviceName",obj.serviceName);
        element.setAttribute("onclick","selectService(this.id,this.value, this.getAttribute('servicename'))");
        element.textContent = obj.serviceName + " - " + parseFloat(obj.serviceValue).toFixed(2);
        document.querySelector("#services").appendChild(element);
    }
}

const countAddedServices = (typeOperation) =>{
    setOfAddedServices = document.querySelectorAll("button[option='service']");
    const totalBill = () => {
        var total = 0.0;
        for(let i = 0; i < setOfAddedServices.length;i++){
            total += parseFloat(setOfAddedServices[i].getAttribute("serviceValue"));
        }
        return total.toFixed(2);
        }
    document.querySelector("#collapseAddedServices").textContent = setOfAddedServices.length + " Serviços selecionados - Total de R$ " + totalBill();
}

const deleteAddedService = (serviceId) =>{
    document.querySelector("#service"+serviceId).remove();
    countAddedServices(0);
}

const selectService = (serviceId, serviceValue, serviceName) => {
    const serviceOption = document.createElement("div");
    const row = document.createElement("div");
    row.setAttribute("id","service"+serviceId);
    row.setAttribute("class", "row");
    const col1 = document.createElement("div");
    col1.setAttribute("class", "col-xs-2 col-xl-1");
    const col2 = document.createElement("div");
    col2.setAttribute("class", "col-xs-8 col-xl-11");
    const service = document.createElement("button");
    service.setAttribute("serviceId",serviceId);
    service.setAttribute("serviceValue",serviceValue);
    service.setAttribute("class","btn collapseOptions text-center");
    service.setAttribute("style","width: 100%");
    service.setAttribute("option","service");
    service.textContent = serviceName + " - R$ " + parseFloat(serviceValue).toFixed(2);
    col2.appendChild(service);

    const col3 = document.createElement("div");
    col3.setAttribute("class","col-xs-2 col-xl-1 text-right");
    const buttonAdd = document.createElement("button");
    buttonAdd.setAttribute("class","btn");
    buttonAdd.setAttribute("idOfService",serviceId);
    buttonAdd.setAttribute("title","EXcluir este serviço.");
    buttonAdd.setAttribute("onclick","deleteAddedService(" + serviceId + ")");
    const glyphicon = document.createElement("span");
    glyphicon.setAttribute("class", "glyphicon glyphicon-trash");
    buttonAdd.appendChild(glyphicon);
    col3.appendChild(buttonAdd);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    document.querySelector("#addedServices").appendChild(row);
    countAddedServices(1);
 }


let employers = [
    {
        employerId:15, 
        employerName: "Amber Lilith"
    },

    {
        employerId:16, 
        employerName: "Maria Ordone"
    },

    {
        employerId:17, 
        employerName: "José Tadeu"
    }
]



let services = [
    {
        serviceId : 1,
        serviceName : "ESCOVA",
        serviceValue : 35.90  
    },

    {
        serviceId : 2,
        serviceName : "SOBRANCELHAS",
        serviceValue : 10.00  
    },

    {
        serviceId : 3,
        serviceName : "TINTURA",
        serviceValue : 35.00  
    },

    {
        serviceId : 4,
        serviceName : "CORTE FEMININO",
        serviceValue : 30.00 
    }
]
window.addEventListener("load", function(){
    createEmployersList(employers);
    createServicesList(services);
}
)
