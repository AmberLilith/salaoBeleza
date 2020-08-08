import {DataBaseRequisitions} from '/salaoBeleza/dataBaseMaintenances/js/classDataBaseRequisitions.js'
const commonServiceView = `
        <fieldset id="commonServiceView" disabled>
          <form id="formServiceView">
          <div class="row">
            <div class="col-xs-12 col-xl-12">
              <label>Nome do serviço:</label>
              <input id="serviceName" dbColumnName="name" type="text" class="form-control" placeholder="Nome">
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-xl-12">
              <label>Valor(R$):</label>
              <input id="serviceValue" dbColumnName="value"  type="number" min="0" class="form-control" placeholder="Valor">
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-xl-12">
              <label>Tempo Gasto:</label>
              <input id="serviceSpentTime" dbColumnName="spentTime"  type="number"  type="number" min="0" class="form-control" placeholder="Tempo para execução">
            </div>
          </div>          
          <section id="maintenanceButtons"></section>
          </form>
          </fieldset>
          `;

      const createServiceModalBody = (modalId) =>{
        const modalBodyId = `body${modalId}`;
        const modal = `<div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"><button class="btn" onclick="activateCreateServiceMode('${modalBodyId}');anableEdition()">Cadastrar</button><span>, </span><button class="btn" onclick="activateUpdateDeleteServiceMode('${modalBodyId}')">Alterar e Excluir</button> Serviços</h4>
          </div>
          <div id="${modalBodyId}" class="modal-body">          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>       
    </div>  
      </div>`;
      document.querySelector(`#${modalId}`).innerHTML = modal;
      }

      const activateCreateServiceMode = (modalBodyId) => {
        const view = `<div class="row">
      <div class="col-xs-12 col-xl-12">
        <button id="createButton" class="form-control" title="Salvar alterações." onclick="alert(saveRecord())">SALVAR</button>
      </div>
      </div>`;
      document.querySelector(`#${modalBodyId}`).innerHTML = commonServiceView;
      document.querySelector(`#maintenanceButtons`).innerHTML = view;
      }

      const activateUpdateDeleteServiceMode = (modalBodyId) => {
        const view = `<div class="row">
      <div class="col-xs-6 col-xl-6">
        <button id="alterbutton" class="form-control" title="Salvar alterações.">ALTERAR</button>
        </div>
        <div class="col-xs-6 col-xl-6">
        <button id="deleteButton" class="form-control" title="Escluir registro.">EXCLUIR</button>
      </div>
      </div>`;
      document.querySelector(`#${modalBodyId}`).innerHTML = `<section>
      <div id="listGroupServices" class="list-group">
        <a href="#" id="item1" groupListitem="" class="list-group-item" onclick="anableEdition();highlightSelectedListGroupItem('listGroupServices', this.id)">Corte</a>
        <a href="#" id="item2" groupListitem=""  class="list-group-item" onclick="anableEdition();highlightSelectedListGroupItem('listGroupServices', this.id)">Escova</a>
        <a href="#" id="item3" groupListitem="" class="list-group-item" onclick="anableEdition();highlightSelectedListGroupItem('listGroupServices', this.id)">Tintura</a>
      </div>
      </section>`.concat(commonServiceView);
      document.querySelector(`#maintenanceButtons`).innerHTML = view;
      }

      const highlightSelectedListGroupItem = (listGroupId, selectedListGroupItemId) =>{
        let listGroupItems = document.querySelectorAll('a[groupListitem]');        
        for(let i = 0;listGroupItems.length;i++){         
          if(listGroupItems[i].getAttribute("id") == selectedListGroupItemId){
            listGroupItems[i].setAttribute("class","list-group-item active");
          }else{
            listGroupItems[i].setAttribute("class","list-group-item");
          }
        }
      }

      const anableEdition = () =>{
        document.querySelector("#commonServiceView").removeAttribute("disabled");
      }


      const getColsAndValuesToUpdate = () =>{
        let valuesToSave = "";
        const name = document.querySelector("#serviceName");
        const value = document.querySelector("#serviceValue");
        const spentTime = document.querySelector("#serviceSpentTime");
        valuesToSave += name.getAttribute("dbColumnName").concat("=").concat(name.value).concat(",");
        valuesToSave += value.getAttribute("dbColumnName").concat("=").concat(value.value).concat(",");
        valuesToSave += spentTime.getAttribute("dbColumnName").concat("=").concat(spentTime.value);
        return valuesToSave.slice(0,valuesToSave.length-1);
      }

      const getValuesToSave = () =>{
        let valuesToSave = "";
        const name = document.querySelector("#serviceName");
        const value = document.querySelector("#serviceValue");
        const spentTime = document.querySelector("#serviceSpentTime");
        valuesToSave += name.value.concat(",");
        valuesToSave += value.value.concat(",");
        valuesToSave += spentTime.value;
        return valuesToSave;
      }

      const saveRecord = () =>{
        const requisiton = new DataBaseRequisitions();
        requisiton.createRecord("servicos", getValuesToSave());
        document.querySelector("#formServiceView").reset();
      }