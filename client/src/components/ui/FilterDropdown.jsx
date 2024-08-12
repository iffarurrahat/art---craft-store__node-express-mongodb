import PropTypes from "prop-types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function FilterDropdown({ onSort }) {
  return (
    <div className="mt-10 ">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-primary py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
          Filter options
          <IoIosArrowDown className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-32 rounded-xl border border-white/5 bg-gray-800 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button
              onClick={() => onSort("item_name")}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              Item Name
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => onSort("price")}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              Price
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button
              onClick={() => onSort("rating")}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              Rating
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

FilterDropdown.propTypes = {
  onSort: PropTypes.func.isRequired,
};
