"use strict";

const openAccountHidden = document.querySelector(".btn-account");
const CloseAccountModal = document.querySelector(".close-modal");
const modal = document.querySelector(".openAccount");
const overlay = document.querySelector(".overlay");

const OpenModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const CloseModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openAccountHidden.addEventListener("click", OpenModal);
CloseAccountModal.addEventListener("click", CloseModal);
