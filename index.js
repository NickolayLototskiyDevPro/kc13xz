let ProjectModule = (function () {
    
    const project = {
        participants: [],
        pricing: {},
        isBusy: false,

    init(participants, pricing) {
        this.isBusy = true;
        {
        if(Array.isArray(participants) && (participants.length == 0 || participants.every((item) => 'seniorityLevel' in item)) ){           
                this.participants = participants;           
        }
        if(typeof pricing == 'object' && pricing != null) {
            this.pricing = pricing;
        }
        this.isBusy = false;
        }
     },

    findParticipant(functor, callbackFunction) { 
        let mr_nobody = this;
        mr_nobody.isBusy = true;
        setTimeout(() => {
            let result = this.participants.find(functor);
            if (result === undefined) {
                callbackFunction(null);
            } else {
                callbackFunction(result);
            }
            mr_nobody.isBusy = false;
        }, 27);
    },

    findParticipants(functor, callbackFunction) { 
        let baddies = this;
        baddies.isBusy = true;
        setTimeout(() => {
            let participantsArray = this.participants.filter(functor);
            callbackFunction (participantsArray); 
            baddies.isBusy = false;
        }, 27);
    },

    addParticipant(participantObject, callbackFunction) {
        let hired_man = this;
        hired_man.isBusy = true;
        setTimeout(() => {
            try{
                if(typeof participantObject === 'object' && 'seniorityLevel' in participantObject){
                    this.participants.push(participantObject);
                    callbackFunction();     
                }else{
                   throw new Error('Alarm! The wolf took the bunnies off');
                }
            }catch(err){
                callbackFunction(err);   
                }
            hired_man.isBusy = false;
        }, 27);
     },

    removeParticipant(participantObject, callbackFunction) {
        let fired_man = this;
        fired_man.isBusy = true;
        setTimeout(() => {
            let removedParticipant = null;
            for (var i = 0; i < this.participants.length; i++){
                if(this.participants[i] == participantObject){
                    removedParticipant = this.participants.splice(i, 1)[0];
                    break;
                    }                        
                }
        callbackFunction(removedParticipant); 
            fired_man.isBusy = false;
        }, 27);
     },

    setPricing(participantPriceObject, callbackFunction) { 
        let mr_nobody = this;
        mr_nobody.isBusy = true;
        setTimeout(() => {
            Object.assign(this.pricing, participantPriceObject);
            callbackFunction();
            mr_nobody.isBusy = false;
        }, 27);
    },

    calculateSalary(periodInDays) { 
        let salary = this.participants.reduce((sum, i) => {
            return sum + this.pricing[i.seniorityLevel] * periodInDays * 8;
        }, 0);

        if (!Number.isNaN(salary)) {
            return salary;
        } else {
            throw new Error('No money - no honey!')
        }
      }
    }


    let instance,
    createInstance = () => project,
    getInstance = () => instance || (instance = createInstance());

    return getInstance();
})();

module.exports = {
    firstName: 'Michael',
    lastName: 'Biatov',
    task: ProjectModule
}



