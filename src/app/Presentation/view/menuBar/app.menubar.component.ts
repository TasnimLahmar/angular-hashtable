
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, MenuItem,PrimeNGConfig} from 'primeng/api';
import {HashtableController} from "../../controller/HashTableController";
import {Table} from "../../../../model/Table";
import {Service} from "../../../../service/Service";
import {Node} from "../../../../model/Node";



@Component({
  selector: 'menubar-template-demo',
  templateUrl: './app.menubar.component.html'
})
export class MenubarTemplateDemo implements OnInit {
  constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) { }

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  items: MenuItem[] | undefined;
  controller:HashtableController=new HashtableController();
  model:Table=new Table(0);
  service:Service=new Service(new Table(10));
  visible: boolean = false;
  visible1:boolean=false;
  visible2:boolean=false;
  index=0;
  size? : number ;
  value:string|null=null;
  ngOnInit() {
    this.primengConfig.setTranslation({
      accept: 'YES',
      reject: 'NOOO'
    });
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            command: () => this.visible=true


          },

          {
            label: 'Add',
            icon: 'pi pi-fw pi-bookmark',
            command: () => this.visible1=true

          },

          {      label: 'Exit',
                icon: 'pi pi-fw pi-video'


          },

          {
            separator: true
          },

        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'About',
            icon: 'pi pi-fw pi-align-left',
            command: () => this.aboutDialog()

          },
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
aboutDialog(){
    this.visible2=true;
}
    draw() {

      this.service.getTable().getNodes().length=this.size!;
      this.model=new Table(this.size!);
      console.log(this.model.getSize());
      this.service=new Service(this.model);
      this.controller.setService(this.service);
      this.drawTable();
    }


  drawTable() {

    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
    context!.clearRect(0, 0, canvas.width, canvas.height);
    const cellSize = 80;
    const tableSize = this.size;


    let nodes =this.model.getNodes();
    const  tableHeight = (cellSize * this.model.getSize());
    const startX = ((canvas.width- cellSize) / 2);
    const startY = 40;
     let q=startY+50;
    canvas.width = 1400;
    canvas.height =400 + tableSize! * cellSize;
    console.log(this.value);
    if(this.value!=null && this.service.add(this.value)==true){
      this.service.add(this.value);

      this.controller.setService(this.service);
       this.index=this.service.hash(this.value!);
      console.log(this.service.getTable().getNodes()[this.index]+ "at index"+this.index);

      }



    for (let i = 0; i < tableSize!; i++) {
      const y = startY+ i * cellSize;
      const x=60;
      context!.fillStyle = 'white';
      context!.fillRect(x, y, cellSize, cellSize);
      context!.strokeStyle='black';
      context!.lineWidth=2
      context!.strokeRect(x, y, cellSize, cellSize);
      this.service=new Service(this.model);
      q+=cellSize;
      let n:Node | null=nodes[i];
      let r=x;

      if(i<=this.index && nodes[this.index]!=null){
        setTimeout(()=>{
          context!.fillStyle = 'cyan';
          context!.fillRect(x, y, cellSize, cellSize);
          context!.strokeStyle='black';
          context!.lineWidth=2
          context!.strokeRect(x, y, cellSize, cellSize);

        },1000*(i+1));
      }


      if(n===null){
        this.drawMass(i,0,cellSize,context!,r,cellSize/2);
      }
      while(n!=null){
        if(n.isLast()==false){
          this.drawNode(i,0,n,cellSize,context!,r,startY);
          r+=70+x;
          let k=this.controller.getService().hash(n.getValue());
          if(n.getNext()==null){
            this.drawMass(k,0,cellSize,context!,r,cellSize/2);
          }
          n=n.getNext();


        }else{
          this.drawNode(i,1400*(i+1),n,cellSize,context!,r,startY);
          r+=70+x;
          let k=this.controller.getService().hash(n.getValue());
          if(n.getNext()==null){
            this.drawMass(k,2000*(k+1),cellSize,context!,r,cellSize/2);
          }
          n=n.getNext();
        }


      }


      console.log(this.service.getTable().getNodes()[i] +" | \t");
    }
    console.log(this.service.getTable().getNodes()+"\n");


    this.value=null;
    this.index=0;

  }

  drawNode(index:number,duration:number,node:Node,caseSize:number,context:CanvasRenderingContext2D,startX:number,startY:number){

    setTimeout(()=>{
      let lineY=startY+caseSize*index+43;
      context!.beginPath();
      context!.moveTo(startX+caseSize,lineY);
      context!.lineTo(startX+caseSize+50,lineY);
      context!.lineWidth = 2;
      context!.strokeStyle = 'black';
      context!.stroke();
      context!.closePath();
      let rectY=lineY+caseSize;
      context!.fillStyle="orange";

      context!.fillRect(startX+caseSize+50,rectY-caseSize-30,caseSize,caseSize-25);
      context!.strokeStyle="black";
      context!.lineWidth=2;
      context!.strokeRect(startX+caseSize+50,rectY-caseSize-30,caseSize,caseSize-25);
      context!.fillStyle="black";
      context!.fillStyle = '#000000';
      context!.font = '20px Arial ';
      context!.textAlign = 'center';
      context!.textBaseline = 'middle';
      context!.fillText(node.getValue(),startX+caseSize+90,rectY-caseSize,40);
      console.log(this.service.getTable().getNodes()[index]);

      this.canvas.nativeElement.addEventListener("click", (event: MouseEvent) => {
        const canvasRect = this.canvas.nativeElement.getBoundingClientRect();
        const mouseX = event.clientX - canvasRect.left;
        const mouseY = event.clientY - canvasRect.top;

        const rectX = startX + caseSize + 50;
        const rectWidth = caseSize;
        const rectHeight = caseSize - 25;

        if (
          mouseX >= rectX &&
          mouseX <= rectX + rectWidth &&
          mouseY >= rectY - caseSize - 30 &&
          mouseY <= rectY - caseSize - 30 + rectHeight
        ) {
          this.confirmationService.confirm({
            message: 'Are you sure you want to remove the string?',
            accept: () => {
              this.service.remove(node.getValue());
              this.drawTable();
            },
          });
        }
      });

    },duration);
    node.setLast(false);



  }

  drawMass(i:number,duration:number,caseSize:number,context:CanvasRenderingContext2D,startX:number,startY:number){
    setTimeout(()=>{
      let lineY=startY+50+caseSize*i;
      context!.beginPath();
      context!.moveTo(startX+caseSize,lineY);
      context!.lineTo(startX+caseSize+50,lineY);
      //msalha
      context!.moveTo(startX+caseSize+50,lineY-20);
      context!.lineTo(startX+caseSize+50,lineY+20);
      //mchot
      context!.moveTo(startX+caseSize+50,lineY+10);
      context!.lineTo(startX+caseSize+60,lineY);
      context!.moveTo(startX+caseSize+50,lineY-5);
      context!.lineTo(startX+caseSize+60,lineY-15);
      context!.lineWidth = 2;
      context!.strokeStyle = 'black';
      context!.stroke();
      context!.closePath();
    },duration)



  }

}
