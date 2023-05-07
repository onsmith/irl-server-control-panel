"use client";

import AccordionExample from "../components/examples/accordian-example";
import AlertsExample from "../components/examples/alerts-example";
import AvatarExample from "../components/examples/avatar-example";
import BadgesExample from "../components/examples/badges-example";
import BreadcrumbExample from "../components/examples/breadcrumb-example";
import ButtonGroupExample from "../components/examples/button-group-example";
import ButtonsExample from "../components/examples/buttons-example";
import CardExample from "../components/examples/card-example";
import CarouselExample from "../components/examples/carousel-example";
import DropdownExample from "../components/examples/dropdown-example";
import FooterExample from "../components/examples/footer-example";
import FormsExample from "../components/examples/forms-example";
import ListGroupExample from "../components/examples/list-group-example";
import ModalExample from "../components/examples/modal-example";
import NavbarsExample from "../components/examples/navbars-example";
import PaginationExample from "../components/examples/pagination.example";
import ProgressExample from "../components/examples/progress-example";
import RatingExample from "../components/examples/rating-example";
import SidebarExample from "../components/examples/sidebar-example";
import SpinnersExample from "../components/examples/spinners-example";
import TablesExample from "../components/examples/tables-example";
import TabsExample from "../components/examples/tabs-example";
import TimelineExample from "../components/examples/timeline-example";
import ToastExample from "../components/examples/toast-example";
import TooltipsExample from "../components/examples/tooltips-example";

export default function IndexPage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
            Welcome to <code>Flowbite</code> on <code>Next.js</code>!
          </h1>
        </header>
      </section>
      <section>
        <header>
          <h2 className="mb-3 text-4xl font-bold dark:text-gray-200">Alert</h2>
        </header>
        <AlertsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Accordion
          </h2>
        </header>
        <AccordionExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Avatar
          </h2>
        </header>
        <AvatarExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Badges
          </h2>
        </header>
        <BadgesExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Breadcrumb
          </h2>
        </header>
        <BreadcrumbExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Buttons
          </h2>
        </header>
        <ButtonsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Button group
          </h2>
        </header>
        <ButtonGroupExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Card
          </h2>
        </header>
        <CardExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Carousel
          </h2>
        </header>
        <CarouselExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Dropdown
          </h2>
        </header>
        <DropdownExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Forms
          </h2>
        </header>
        <FormsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Footer
          </h2>
        </header>
        <FooterExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            List group
          </h2>
        </header>
        <ListGroupExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Modal
          </h2>
        </header>
        <ModalExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Navbars
          </h2>
        </header>
        <NavbarsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Pagination
          </h2>
        </header>
        <PaginationExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Progress
          </h2>
        </header>
        <ProgressExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Rating
          </h2>
        </header>
        <RatingExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Sidebar
          </h2>
        </header>
        <SidebarExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Spinners
          </h2>
        </header>
        <SpinnersExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Tables
          </h2>
        </header>
        <div className="max-w-full overflow-x-scroll">
          <TablesExample />
        </div>
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Tabs
          </h2>
        </header>
        <TabsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Timeline
          </h2>
        </header>
        <TimelineExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Toast
          </h2>
        </header>
        <ToastExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Tooltips
          </h2>
        </header>
        <TooltipsExample />
      </section>
    </div>
  );
}
