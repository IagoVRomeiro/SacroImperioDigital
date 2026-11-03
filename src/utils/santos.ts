import { meses, santos, type MesSlug, type Santo } from "../data/santos";
import { getBrasiliaDateParts } from "./brasilia-date";

export const toSlug = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const getSantoHref = (mes: MesSlug, santo: Santo) => `/santos/${mes}/${santo.day}/${toSlug(santo.title)}`;

export const getSantoDeHoje = () => {
  const { day, monthIndex } = getBrasiliaDateParts();
  const mes = meses[monthIndex];
  const santo = santos[mes.slug].find((item) => item.day === day);
  return { day, mes, santo };
};
