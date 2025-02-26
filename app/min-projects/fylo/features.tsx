import Image from 'next/image';
import iconAccessAnyWhere from '@/public/fylo/icon-access-anywhere.svg';
import iconSecurity from '@/public/fylo/icon-security.svg';
import iconCollaboration from '@/public/fylo/icon-collaboration.svg';
import iconFile from '@/public/fylo/icon-any-file.svg';

function Features() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-x-4 gap-y-20 md:grid-cols-2">
          {/* box 1 */}
          <div className="flex flex-col items-center">
            <Image src={iconAccessAnyWhere} alt="access any where" />
            <h3 className="mb-4 mt-10 text-2xl font-bold">
              Access your file from anywhere
            </h3>
            <p className="max-w-sm text-center text-lg md:max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>

          {/* box2 */}
          <div className="flex flex-col items-center">
            <Image src={iconSecurity} alt="access any where" />
            <h3 className="mb-4 mt-10 text-2xl font-bold">
              Security you can trust
            </h3>
            <p className="max-w-sm text-center text-lg md:max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>

          {/* box3 */}
          <div className="flex flex-col items-center">
            <Image src={iconCollaboration} alt="access any where" />
            <h3 className="mb-4 mt-10 text-2xl font-bold">
              Access your file from anywhere
            </h3>
            <p className="max-w-sm text-center text-lg md:max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>

          {/* box4 */}
          <div className="flex flex-col items-center">
            <Image src={iconFile} alt="access any where" />
            <h3 className="mb-4 mt-10 text-2xl font-bold">
              Security you can trust
            </h3>
            <p className="max-w-sm text-center text-lg md:max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
