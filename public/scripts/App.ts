// import { Car, CarOptions } from './Car'; // Asumsikan Car dan CarOptions diimpor dari file yang sesuai
// import { Binar } from './Binar'; // Asumsikan Binar adalah modul yang menyediakan data mobil
// import feather from 'feather-icons'; // Jika feather-icons digunakan untuk ikon

// interface HTMLElementEvent<T extends HTMLElement> extends Event {
//   target: T;
// }

export default class App {
  private filterButton: HTMLElement;
  private carContainerElement: HTMLElement;
  private driverElement: HTMLElement;
  private dateElement: HTMLElement;
  private timeElement: HTMLElement;

  private formDriver!: HTMLSelectElement;
  private formDate!: HTMLInputElement;
  private formTime!: HTMLInputElement;
  private formCapacity!: HTMLInputElement;

  constructor() {
    // this.clearButton = document.getElementById("clear-btn") as HTMLButtonElement;
    this.filterButton = document.getElementById("filter-btn") as HTMLElement;
    this.carContainerElement = document.getElementById("cars-container") as HTMLElement;
    this.driverElement = document.querySelector(".form-driver") as HTMLElement;
    this.dateElement = document.querySelector(".form-date") as HTMLElement;
    this.timeElement = document.querySelector(".form-time") as HTMLElement;
  }

  async init(): Promise<void> {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.filterButton.onclick = this.run;
  }

  run = (event: MouseEvent): void => {
    this.formDriver = document.getElementById("form-driver") as HTMLSelectElement;
    this.formDate = document.getElementById("form-date") as HTMLInputElement;
    this.formTime = document.getElementById("form-time") as HTMLInputElement;
    this.formCapacity = document.getElementById("form-capacity") as HTMLInputElement;

    const addErrorMessage = (form: HTMLElement, parentElement: HTMLElement): void => {
      const alertText = parentElement.querySelector(".text-red-600");
      if (!alertText) {
        form.className = "border-red-600 rounded-md border-2 w-56";
        const redText = document.createElement('p');
        redText.innerText = "Field tidak boleh kosong";
        redText.className = "text-red-600";
        parentElement.appendChild(redText);
      }
    };

    if (this.formDriver.value === "" || this.formDate.value === "" || this.formTime.value === "") {
      if (this.formDriver.value === "") {
        addErrorMessage(this.formDriver, this.driverElement);
      }
      if (this.formDate.value === "") {
        addErrorMessage(this.formDate, this.dateElement);
      }
      if (this.formTime.value === "") {
        addErrorMessage(this.formTime, this.timeElement);
      }
      event.preventDefault();
      return;
    } else {
      this.formDriver.className =
        this.formDate.className =
        this.formTime.className = "border-gray-100 rounded-md border-2 w-56";

      const formDriverText = this.driverElement.querySelector(".text-red-600");
      if (formDriverText) formDriverText.remove();

      const formDateText = this.dateElement.querySelector(".text-red-600");
      if (formDateText) formDateText.remove();

      const formTimeText = this.timeElement.querySelector(".text-red-600");
      if (formTimeText) formTimeText.remove();
    }
    this.clear();

    const cars = Car.filterCars(
      this.formDriver.value,
      this.formDate.value,
      this.formTime.value,
      this.formCapacity.value
    );

    if (cars.length === 0) {
      const notFound = document.createElement("h1");
      notFound.innerHTML = `<h1 class="font-extrabold text-4xl text-red-800">MOBIL TIDAK DITEMUKAN</h1>`;
      this.carContainerElement.appendChild(notFound);
    } else {
      cars.forEach((car) => {
        const node = document.createElement("div");
        node.innerHTML = car.render(); // Pastikan method render ada pada class Car
        this.carContainerElement.appendChild(node);
      });
    }

    feather.replace();
    event.preventDefault();
  };

  async load(): Promise<void> {
    const cars: CarOptions[] = await Binar.listCars();
    Car.init(cars);
  }

  clear = (): void => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
