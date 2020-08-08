<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Title Page</title>
        <script src="../crudEmployer/js/crudEmployer.js"></script> 
        <script type="module" src="../crudService/js/crudService.js"></script>        
        <script src="../js/jquery-3.5.1.min.js "></script>
        <script src="../js/bootstrap.min.js"></script>  
        <script src="../js/funcoesGerais.js"></script>
        <script src="js/agendarHorario.js"></script>  
        <script type="module" src="../dataBaseMaintenances/js/classDataBaseRequisitions.js"></script>
                 
        <link href="../css/bootstrap.min.css" rel="stylesheet">
        <link href="/salaoBeleza/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="../css/classesGerais.css" rel="stylesheet"> 
        <link href="css/agendarHorario.css" rel="stylesheet"> 		
            
        
    </head>   
    <body onload="">
        <div class="container">
            <div class="page-header">
                <h1 id="titulo" class="pageTitle text-center"></h1>
                <h4 id="standardMessage" class="text-center displayHidden">MENSAGENS PADROES</h4>
            </div>
            <div class="modal fade" id="crudEmployerScreen" role="dialog" data-backdrop="static"></div> 
            <div class="modal fade" id="crudServiceScreen" role="dialog" data-backdrop="static"></div> 
            <div class="row">
                <div  class="text-center"  style="width: 100%;">
                    <div class="row">
                        <div class="col-xs-3 col-xl-3"></div>
                        <div class="col-xs-6 col-xl-6 text-center">
                            <div title="Clique para exibir profissionais." id="collapseEmployers"  class="btn collapser text-center" data-toggle="collapse" data-target="#employers" style="width: 100%;">
                                PROFISSIONAL
                            </div>
                        </div>
                        <div class="col-xs-3 col-xl-3 text-right">
                            <button id="callCrudEmployer" title="Alterar ou cadastrar profissional." onclick="createEmployerModalBody('crudEmployerScreen')" data-toggle="modal" data-target="#crudEmployerScreen" class="btn"><span class="glyphicon glyphicon-pencil"></span></button>
                        </div>
                    </div>
                </div>
                <div id="employers" class="collapse">                        
                </div>

                    <div  class="text-center"  style="width: 100%;">
                        <div class="row">
                            <div class="col-xs-3 col-xl-3">

                            </div>
                            <div class="col-xs-6 col-xl-6 text-center">
                                <div title="Clique para exibir opções de serviços." id="collapseServices"  class="btn collapser text-center" data-toggle="collapse" data-target="#services" style="width: 100%;">
                                    SERVIÇOS
                                </div>
                                </div>

                            <div class="col-xs-3 col-xl-3 text-right">
                                <button id="callCrudService" title="Alterar ou cadastrar serviço." data-toggle="modal" data-target="#crudServiceScreen" class="btn" onclick="createServiceModalBody('crudServiceScreen')"><span class="glyphicon glyphicon-pencil"></span></button>
                            </div>

                        </div>

                    </div>
                    <div id="services" class="collapse">                        
                    </div>

                    <div  class="text-center"  style="width: 100%;">
                        <div class="row">
                            <div class="col-xs-3 col-xl-3">

                            </div>
                            <div class="col-xs-6 col-xl-6 text-center">
                                <div title="Clique para exibir os serviços já adicionados." id="collapseAddedServices"  class="btn collapser text-center" data-toggle="collapse" data-target="#addedServices" style="width: 100%;">
                                    0 SERVIÇOS ADICIONADOS
                                </div>
                                </div>

                            <div class="col-xs-3 col-xl-3 text-right">
                                
                            </div>

                        </div>

                    </div>
                    <div id="addedServices" class="collapse">                        
                    </div>
                </div>
                <div class="col-xm-0 col-lg-3"></div>
                <footer></footer>
            </div>





    
    </body>
</html>

