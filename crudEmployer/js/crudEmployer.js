//corrigir pra quando pesquisa for concluída e trouxer resultado onde
// o cadastro tem mais de um telefone, habilitar somente a div do telefone correspondente
const commonView = `<section>
<label>Nome:</label>
    <input id="employerName" type="text" class="form-control" placeholder="Nome" required>            
    <label>Telefone:</label>
    <input id="foneNumber1" type="tel" class="form-control" activated="true" placeholder="Telefone">
    <div id="fone2" style="display: none;">
        <label>Telefone 2:</label>
        <div class="row">
            <div class="col-xs-2 col-xl-1"></div>
            <div class="col-xs-8 col-xl-10">
                <input id="foneNumber2" type="tel" class="form-control" activated="false" style="width: 100%;" placeholder="Telefone">  
            </div>
            <div class="col-xs-2 col-xl-1">
                <button id="deactivateFone2" foneContainer="fone2" foneInput="foneNumber2"  class="btn" title="Excluir telefone 2" onclick="deactivateNewNumberFone('deactivateFone2')"><span class="glyphicon glyphicon-trash"></span></button>
            </div>
        </div>
    </div>
    <div id="fone3" style="display: none;">
        <label>Telefone 3:</label>
        <div class="row">
            <div class="col-xs-2 col-xl-1"></div>
            <div class="col-xs-8 col-xl-10">
                <input id="foneNumber3" type="tel" class="form-control" activated="false" style="width: 100%;" placeholder="Telefone">  
            </div>
            <div class="col-xs-2 col-xl-1">
                <button id="deactivateFone3" foneContainer="fone3" foneInput="foneNumber3" class="btn" title="Excluir telefone 3" onclick="deactivateNewNumberFone('deactivateFone3')"><span class="glyphicon glyphicon-trash"></span></button>
            </div>
        </div>
         
    </div>
    <!-- é preciso pegar o que tem no onclick do button abaixo por num método
    corrigindo-o -->
    <button id="addMoreFoneNumbers" class="btn" style="margin-top: 10px;" amountOfAddedFones="1" title="Adicionar mais número de telefone." onclick="activateNewNumberFone()">Adicionar</button>
</section>    
<details>
    <summary id="employerAddress">Endereço</summary>
    <label>Logradouro:</label>
    <input id="employerAddressStreet" type="text" class="form-control" placeholder="Logradouro">
    <label>Número:</label>
    <input id="employerAddressNumber" type="text" class="form-control" placeholder="Número">
    <label>Complemento:</label>
    <input id="employerAddressComplement" type="text" class="form-control" placeholder="Complemento">
    <label>Bairro:</label>
    <input id="employerAddressDistrict" type="text" class="form-control" placeholder="Bairro">
    <label>cidade:</label>
    <input id="employerAddressCity"  type="text" class="form-control" placeholder="Cidade">
    <label>Estado:</label>
    <input id="employerAddressState" type="text" class="form-control" placeholder="Estado">
</details>
<details>
    <summary id="">Serviços que executa</summary>                
    <form>
        <ul id="providedServices" type="none" style="padding-top: 10px;">
            <li>
        <input type="checkbox" id="vehicle1" name="escova" value="35.00" spentTime="40">
        <label for="serviço1">ESCOVA</label><br>
        </li>
        <li>
        <input type="checkbox" id="serviço2" name="corte" value="30.00" spentTime="30">
        <label for="serviço2">CORTE</label><br>
        </li>
        <li>
        <input type="checkbox" id="serviço3" name="progressiva" value="120.00" spentTime="120">
        <label for="serviço3">PROGRESSIVA</label>
        </li>
    </ul>
      </form>    
</details>
<div class="text-center">`
const createEmployerModalBody = ( modalId) =>{
const modalBodyId = `body${modalId}`;
const modal = `<!-- Modal -->
  <div class="modal-dialog">  
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"><button class="btn" onclick="activateCreateEmployerMode('${modalBodyId}')">CADASTRAR</button>, <button class="btn" onclick="activateUpdateDeleteEmployerMode('${modalBodyId}')">ALTERAR OU EXCLUIR</button> PROFISSIONAL</h4>
      </div>
      <div id="${modalBodyId}" class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" onclick="">Fechar</button>
      </div>
    </div>    
  </div>`
document.querySelector(`#${modalId}`).innerHTML = modal;
}

const activateCreateEmployerMode = (modalBodyId) =>{  
  let view = commonView.concat(`
  <button type="submit" id="saveRegister" class="btn" onclick="console.log(getAllFoneNumbers())">SALVAR</button>  
  `)
  document.querySelector(`#${modalBodyId}`).innerHTML = view;
}

const activateUpdateDeleteEmployerMode = (modalBodyId) =>{
const view = `<section>
<label>Digite CPF ou mátrícula do profisional:</label>
<div class="input-group">
    <input type="text" class="form-control" placeholder="CPF ou matrícula">
    <span class="input-group-btn">
      <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span> BUSCAR</button>
    </span>
  </div>
</section>
<fieldset id="datasforchange" disabled>`.concat(commonView).concat(`
    <button id="upadateRegister" class="btn">ATUALIZAR</button>
    <button id="deleteRegister" class="btn">DELETAR</button>   
</fieldset>`);
document.querySelector(`#${modalBodyId}`).innerHTML = view;
}

const activateNewNumberFone = () => {
  let amountOfAddedFones = parseInt(document.querySelector('#addMoreFoneNumbers').getAttribute('amountOfAddedFones'));
  document.querySelector('#addMoreFoneNumbers').setAttribute('amountOfAddedFones',parseInt(amountOfAddedFones) + 1);
  amountOfAddedFones += 1;
  document.querySelector(`#foneNumber${amountOfAddedFones}`).setAttribute("activated","true");
  document.querySelector(`#fone${amountOfAddedFones}`).style.display = 'block';
  if(amountOfAddedFones == 3){
  document.querySelector('#addMoreFoneNumbers').setAttribute('disabled','true');
  document.querySelector('#addMoreFoneNumbers').setAttribute('title','Não é possível adicionar mais telefones.');
  }
}

const deactivateNewNumberFone = (idCaller) => {
  const amountOfAddedFones = document.querySelector('#addMoreFoneNumbers').getAttribute('amountOfAddedFones');
  const foneContainer = document.querySelector(`#${idCaller}`).getAttribute("foneContainer");    
  const foneInput = document.querySelector(`#${idCaller}`).getAttribute("foneInput"); 
  document.querySelector('#addMoreFoneNumbers').setAttribute('amountOfAddedFones',parseInt(amountOfAddedFones) - 1);
      document.querySelector(`#${foneInput}`).setAttribute("activated","false");      
      document.querySelector(`#${foneContainer}`).style.display = 'none';
      document.querySelector('#addMoreFoneNumbers').removeAttribute('disabled')
      document.querySelector('#addMoreFoneNumbers').setAttribute('title','Adicionar mais número de telefone.');

    }

const getAllSelectedServices = () =>{
  const providedServices = document.querySelectorAll('input[providedService]');
  let allSelectedServices = "";
  for(let i = 0;i < providedServices.length;i++){
    if(providedServices[i].checked == true){
      allSelectedServices += providedServices[i].id + ",";
    }
  }
  return allSelectedServices.slice(0,(allSelectedServices.length-1));
}

const getAllFoneNumbers = () =>{
  let allFoneNumbers = [];
  const foneFields = document.querySelectorAll('input[activated="true"]');
  for(let i = 0;i<foneFields.length;i++){
      allFoneNumbers.push(foneFields[i].value);
  }
  return allFoneNumbers;
}


