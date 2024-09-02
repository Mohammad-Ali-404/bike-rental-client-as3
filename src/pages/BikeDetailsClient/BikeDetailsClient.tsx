import { CreateBookingModal } from "@/components/modal/CreateBookingModal";
import Loader from "@/components/shared/Loader";
import { Badge } from "@/components/ui/badge";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useSingleBikeQuery } from "@/redux/features/bike/bikeApi";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "react-router-dom";

const BikeDetailsClient = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const role = currentUser ? currentUser.role : null;
  const { id } = useParams();
  const { data: bikeDetails, isLoading } = useSingleBikeQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  const {
    _id,
    name,
    pricePerHour,
    model,
    brand,
    year,
    description,
    image,
    cc,
    isAvailable,
  } = bikeDetails.data;
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src={image}
            alt="Bike Image"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
        <div className="grid gap-6 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">{name}</h1>
            <p className="text-gray-600 flex items-center gap-3 my-4">
              Brand:{" "}
              <Badge className="uppercase text-xl bg-blue-100 text-blue-600">
                {brand}
              </Badge>
            </p>
            <p className="text-gray-600 flex items-center gap-3">
              Model:{" "}
              <Badge className="uppercase text-xl bg-gray-100 text-gray-800">
                {model}
              </Badge>
            </p>
          </div>
          <div className="prose prose-lg">
            <p>{description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-lg">
            <div>
              <p className="text-gray-500">CC</p>
              <p className="font-semibold">{cc}</p>
            </div>
            <div>
              <p className="text-gray-500">Price per Hour</p>
              <p className="font-semibold">${pricePerHour}</p>
            </div>
            <div>
              <p className="text-gray-500">Year</p>
              <p className="font-semibold">{year}</p>
            </div>
            <div>
              <p className="text-gray-500">Availability</p>
              <p
                className={`font-semibold ${
                  isAvailable ? "text-green-500" : "text-red-500"
                }`}
              >
                {isAvailable ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
          <CreateBookingModal
            role={role}
            id={_id}
            className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-purple-500 hover:to-blue-500 transition-transform transform hover:scale-105 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BikeDetailsClient;
