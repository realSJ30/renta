export const dynamic = "force-dynamic";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import FeaturedDestinations from "./components/FeaturedDestinations";
import Hero from "./components/Hero";
import ListingCard from "./components/listings/ListingCard";
import SectionHeader from "./components/SectionHeader";

interface HomeProps {
  searchParams: IListingsParams;
}

const hasAnyFilter = (params: IListingsParams) =>
  Boolean(
    params.category ||
      params.locationValue ||
      params.startDate ||
      params.endDate ||
      params.guestCount ||
      params.roomCount ||
      params.bathroomCount ||
      params.userId
  );

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  const browsing = hasAnyFilter(searchParams);

  if (listings.length === 0) {
    return (
      <Container>
        {!browsing && (
          <div className="mb-10">
            <Hero currentUser={currentUser} />
          </div>
        )}
        <EmptyState showReset />
      </Container>
    );
  }

  return (
    <Container>
      {!browsing && (
        <>
          <section className="mb-12">
            <Hero currentUser={currentUser} />
          </section>

          <section className="mb-14">
            <SectionHeader
              eyebrow="Destinations"
              title="Where are you going?"
              subtitle="Pick a vibe and we'll surface stays that match."
            />
            <FeaturedDestinations />
          </section>
        </>
      )}

      <section>
        <SectionHeader
          eyebrow={browsing ? "Results" : "Handpicked"}
          title={browsing ? "Matching stays" : "Top-rated places to stay"}
          subtitle={
            browsing
              ? `${listings.length} ${
                  listings.length === 1 ? "stay" : "stays"
                } match your search.`
              : "Fresh from our community of hosts around the world."
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Home;
