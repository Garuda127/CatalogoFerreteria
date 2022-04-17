var contenido1 = document.getElementById("categoria1");
var contenido2 = document.getElementById("categoria2");
var contenido3 = document.getElementById("categoria3");
var contenido4 = document.getElementById("categoria4");
var contenido5 = document.getElementById("categoria5");
var contenido6 = document.getElementById("categoria6");
function obtener1() {
  fetch("http://localhost:3000/cards/1")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        contenido1.innerHTML += `<div class="shadow-lg rounded-lg h-auto">
        <a href="#">
          <img
            style="width: 250px; height: 250px"
            class="rounded-t-lg m-auto hover:opacity-80"
            src="${element.ImagenesURL}"
            alt="pala1"
        /></a>
        <div class="p-5">
          <h3>
            <a href="#">${element.Nombre}</a>
          </h3>
          <div class="flex flex-row my-3">
            <div
              class="bg-gradient-to-br from-black to-yellow-500 h-5 w-5 rounded-full shadow-md mr-2"
            ></div>
            <div class="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
          </div>
          <!-- colores productos -->
          <div class="flex flex-row my-3">
            <div
              class="border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2"
            >
              Precio: $${element.Precio} mxn
            </div>
          </div>
          <!-- tamanos -->
          <div class="flex flex-col xl:flex-row justify-between">
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 hover:from-pink-600 hover:to-pink-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h- w-4 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Agregar </a
            ><!-- agregar al carrito -->
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-pink-600 to-purple-500 rounded-full py-2 px-4 text-gray-50 hover:from-purple-600 hover:to-purple-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Comprar ahora
            </a>
          </div>
          <!-- botones -->
        </div>
        <!-- seccion abajo -->
      </div>`;
      });
    });
} // fin de la funcion obtener
function obtener2() {
  fetch("http://localhost:3000/cards/2")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        contenido2.innerHTML += `<div class="shadow-lg rounded-lg h-auto">
        <a href="#">
          <img
            style="width: 250px; height: 250px"
            class="rounded-t-lg m-auto hover:opacity-80"
            src="${element.ImagenesURL}"
            alt="pala1"
        /></a>
        <div class="p-5">
          <h3>
            <a href="#">${element.Nombre}</a>
          </h3>
          <div class="flex flex-row my-3">
            <div
              class="bg-gradient-to-br from-black to-yellow-500 h-5 w-5 rounded-full shadow-md mr-2"
            ></div>
            <div class="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
          </div>
          <!-- colores productos -->
          <div class="flex flex-row my-3">
            <div
              class="border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2"
            >
              Precio: $${element.Precio} mxn
            </div>
          </div>
          <!-- tamanos -->
          <div class="flex flex-col xl:flex-row justify-between">
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 hover:from-pink-600 hover:to-pink-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h- w-4 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Agregar </a
            ><!-- agregar al carrito -->
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-pink-600 to-purple-500 rounded-full py-2 px-4 text-gray-50 hover:from-purple-600 hover:to-purple-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Comprar ahora
            </a>
          </div>
          <!-- botones -->
        </div>
        <!-- seccion abajo -->
      </div>`;
      });
    });
} // fin de la funcion obtener
function obtener3() {
  fetch("http://localhost:3000/cards/3")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        contenido3.innerHTML += `<div class="shadow-lg rounded-lg h-auto">
        <a href="#">
          <img
            style="width: 250px; height: 250px"
            class="rounded-t-lg m-auto hover:opacity-80"
            src="${element.ImagenesURL}"
            alt="pala1"
        /></a>
        <div class="p-5">
          <h3>
            <a href="#">${element.Nombre}</a>
          </h3>
          <div class="flex flex-row my-3">
            <div
              class="bg-gradient-to-br from-black to-yellow-500 h-5 w-5 rounded-full shadow-md mr-2"
            ></div>
            <div class="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
          </div>
          <!-- colores productos -->
          <div class="flex flex-row my-3">
            <div
              class="border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2"
            >
              Precio: $${element.Precio} mxn
            </div>
          </div>
          <!-- tamanos -->
          <div class="flex flex-col xl:flex-row justify-between">
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 hover:from-pink-600 hover:to-pink-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h- w-4 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Agregar </a
            ><!-- agregar al carrito -->
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-pink-600 to-purple-500 rounded-full py-2 px-4 text-gray-50 hover:from-purple-600 hover:to-purple-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Comprar ahora
            </a>
          </div>
          <!-- botones -->
        </div>
        <!-- seccion abajo -->
      </div>`;
      });
    });
} // fin de la funcion obtener
function obtener4() {
  fetch("http://localhost:3000/cards/4")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        contenido4.innerHTML += `<div class="shadow-lg rounded-lg h-auto">
        <a href="#">
          <img
            style="width: 250px; height: 250px"
            class="rounded-t-lg m-auto hover:opacity-80"
            src="${element.ImagenesURL}"
            alt="pala1"
        /></a>
        <div class="p-5">
          <h3>
            <a href="#">${element.Nombre}</a>
          </h3>
          <div class="flex flex-row my-3">
            <div
              class="bg-gradient-to-br from-black to-yellow-500 h-5 w-5 rounded-full shadow-md mr-2"
            ></div>
            <div class="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
          </div>
          <!-- colores productos -->
          <div class="flex flex-row my-3">
            <div
              class="border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2"
            >
              Precio: $${element.Precio} mxn
            </div>
          </div>
          <!-- tamanos -->
          <div class="flex flex-col xl:flex-row justify-between">
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 hover:from-pink-600 hover:to-pink-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h- w-4 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Agregar </a
            ><!-- agregar al carrito -->
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-pink-600 to-purple-500 rounded-full py-2 px-4 text-gray-50 hover:from-purple-600 hover:to-purple-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Comprar ahora
            </a>
          </div>
          <!-- botones -->
        </div>
        <!-- seccion abajo -->
      </div>`;
      });
    });
} // fin de la funcion obtener
function obtener5() {
  fetch("http://localhost:3000/cards/5")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        contenido5.innerHTML += `<div class="shadow-lg rounded-lg h-auto">
        <a href="#">
          <img
            style="width: 250px; height: 250px"
            class="rounded-t-lg m-auto hover:opacity-80"
            src="${element.ImagenesURL}"
            alt="pala1"
        /></a>
        <div class="p-5">
          <h3>
            <a href="#">${element.Nombre}</a>
          </h3>
          <div class="flex flex-row my-3">
            <div
              class="bg-gradient-to-br from-black to-yellow-500 h-5 w-5 rounded-full shadow-md mr-2"
            ></div>
            <div class="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
          </div>
          <!-- colores productos -->
          <div class="flex flex-row my-3">
            <div
              class="border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2"
            >
              Precio: $${element.Precio} mxn
            </div>
          </div>
          <!-- tamanos -->
          <div class="flex flex-col xl:flex-row justify-between">
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 hover:from-pink-600 hover:to-pink-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h- w-4 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Agregar </a
            ><!-- agregar al carrito -->
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-pink-600 to-purple-500 rounded-full py-2 px-4 text-gray-50 hover:from-purple-600 hover:to-purple-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Comprar ahora
            </a>
          </div>
          <!-- botones -->
        </div>
        <!-- seccion abajo -->
      </div>`;
      });
    });
} // fin de la funcion obtener
function obtener6() {
  fetch("http://localhost:3000/cards/6")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        contenido6.innerHTML += `<div class="shadow-lg rounded-lg h-auto">
        <a href="#">
          <img
            style="width: 250px; height: 250px"
            class="rounded-t-lg m-auto hover:opacity-80"
            src="${element.ImagenesURL}"
            alt="pala1"
        /></a>
        <div class="p-5">
          <h3>
            <a href="#">${element.Nombre}</a>
          </h3>
          <div class="flex flex-row my-3">
            <div
              class="bg-gradient-to-br from-black to-yellow-500 h-5 w-5 rounded-full shadow-md mr-2"
            ></div>
            <div class="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
          </div>
          <!-- colores productos -->
          <div class="flex flex-row my-3">
            <div
              class="border-2 border-gray-300 text-gray-400 rounded-md text-sm px-2 py-1 mr-2"
            >
              Precio: $${element.Precio} mxn
            </div>
          </div>
          <!-- tamanos -->
          <div class="flex flex-col xl:flex-row justify-between">
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 hover:from-pink-600 hover:to-pink-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h- w-4 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Agregar </a
            ><!-- agregar al carrito -->
            <a
              href="#"
              class="justify-center my-2 flex flex-row bg-gradient-to-r from-pink-600 to-purple-500 rounded-full py-2 px-4 text-gray-50 hover:from-purple-600 hover:to-purple-600 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Comprar ahora
            </a>
          </div>
          <!-- botones -->
        </div>
        <!-- seccion abajo -->
      </div>`;
      });
    });
} // fin de la funcion obtener
