import PropTypes from "prop-types";

export default function UserCard({ name, email }) {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
