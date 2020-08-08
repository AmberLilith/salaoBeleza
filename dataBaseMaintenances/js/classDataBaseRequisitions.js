 export class DataBaseRequisitions {
    constructor(){
        this.url = "../dataBaseMaintenances/commonDataBaseMaintenances.php";      
    }//end of constructor()

    ajaxRequisition(qr,rqstionType){
        const convertResponseStrIntoObject = (response) =>{
            return JSON.parse(response);
        }
        let xhttp;        
            $.ajax({
            type : "POST",
            dataType: "html",
            url : this.url,
            beforeSend: function () {						
            },	
            data: {query: qr, requisitonType:rqstionType},
            success: function (msg){
                if(rqstionType == "consult"){                
                console.log(convertResponseStrIntoObject(msg))
                }else{
                    console.log(msg);
                }
            }            
            })
    }//end if ajaxRequisition()    
    
    createRecord(tableName, values){
        let query = `INSERT INTO ${tableName} VALUES (${values});`;
        let requisitonType = "insert";
        this.ajaxRequisition(query,requisitonType);
    }
    
    consultRecord_s(query){
        let requisitonType = "consult";  
        let Record_s = this.ajaxRequisition(query, requisitonType);                        
        return Record_s;
    }//end method consultRecord_s() 
    
  
    updateRecord(recordId,tableName,columnsAndValuesToUpdate){
        const query = `UPDATE ${tableName} SET ${columnsAndValuesToUpdate} WHERE id='${recordId}';`;
        let requisitonType = "update";
        this.ajaxRequisition(query,requisitonType);
    }//end of updateRecord()

    deleteRecord_s(columnName, tableName, recordsIdToDelete){
        const query = `DELETE FROM ${tableName}  WHERE ${columnName} IN (${recordsIdToDelete});`;
        let requisitonType = "update";
        return query;
    }// end of deleteRecord_s()


}//end class



// const requisition = new dataBaseRequisitions;
// window.addEventListener("load",function(){
//     console.log(requisition.createRecord("clientes", "MARIA", "9999999"))
// })
