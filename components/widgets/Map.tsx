import { Card } from "../ui/card";

export default function Map() {
  return (
    <Card className="order-11 col-span-2 h-[25rem] overflow-hidden overscroll-contain  p-0 md:p-0 xl:col-span-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.137100215328!2d105.78419421289058!3d21.0313145296419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1718511079486!5m2!1sen!2s"
        loading="lazy"
        className="w-full h-full"
      ></iframe>
    </Card>
  );
}
