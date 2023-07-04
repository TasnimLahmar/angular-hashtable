import { Table} from '../../../model/Table';
import { Service } from '../../../service/Service';

export class HashtableController {
    private service: Service = new Service(new Table(3));
    private model:Table=new Table(2);

    setService(service: Service): void {
        this.service = service;
    }

    getService(): Service {
        return this.service;
    }

    getModel(): Table {
        return this.getService().getTable();
    }
    setModel(model:Table):void{
      this.model=model;
    }
}
