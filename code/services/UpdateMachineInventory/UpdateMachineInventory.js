function UpdateMachineInventory(req, resp){
    if(!!req.params.VendingMachineID && !!req.params.MachineBinNumber && !!req.params.Quantity) {       
        var msg = "The inventory for bin number " + req.params.MachineBinNumber + " "        
        msg += "in vending machine " + req.params.VendingMachineID + " ";        
        msg += "has been modified by  " + req.params.Quantity + ".";
        resp.success(msg);    
        
    } else {        
        if (!!req.params.VendingMachineID && !!req.params.MachineBinNumber) {   
            resp.error("The quantity was not provided. Inventory cannot be updated.");        
            
        } else {    
            if(!!req.params.VendingMachineID) {
                resp.error("The machine bin number was not provided. Inventory cannot be updated.");
            } else {                
                resp.error("The vending machine ID was not provided. Inventory cannot be updated.");            
                
                   }
        }    
        
    }
    
}