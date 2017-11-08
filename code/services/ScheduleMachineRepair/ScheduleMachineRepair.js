function ScheduleMachineRepair(req, resp){
   if(!!req.params.VendingMachineID && !!req.params.MaintenanceCode) {     
       var msg = "Maintenance scheduled for vending machine " + req.params.VendingMachineID + ". ";
       msg += "Maintenance code = " + req.params.MaintenanceCode + ".";
       resp.success(msg);
   } 
   else {        
       if (!!req.params.VendingMachineID) {
           resp.error("The maintenance code was not provided. Maintenance was not scheduled."); 
       } else {          
           resp.error("The vending machine ID was not provided. Maintenance was not scheduled.");  
         }    
       
   }   
}